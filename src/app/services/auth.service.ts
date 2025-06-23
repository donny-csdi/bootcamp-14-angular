import { inject, Injectable, NgZone } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@angular/fire/auth";

@Injectable({
    providedIn:'root'
})

export class AuthService{
    private auth: Auth = inject(Auth)

    constructor(
        private ngZone: NgZone
    ){}

    private isSessionStorageAvailable(): boolean {
        try {
            return typeof window !== 'undefined' && !!window.sessionStorage 
        }catch(e){
            return false
        }
    }

    async register(email: string, password: string){
        try {
            const userCredential = await this.ngZone.runOutsideAngular(() => 
                createUserWithEmailAndPassword(this.auth, email, password)
            )

            const userData = {
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                registeredAt: new Date().toISOString()
            }

            if (this.isSessionStorageAvailable()) {
                sessionStorage.setItem('user', JSON.stringify(userData))
            }

            this.ngZone.run(() => {
                alert('User registered successfully')
            })
        } catch (error) {
            console.log('Registration Error:', error)
            this.ngZone.run(() => {
                alert('Registration Failed:' + error )
            })
            throw error
        }
    }

    async login(email: string, password: string) {
        try {
            const userCredential = await this.ngZone.runOutsideAngular(() => 
                signInWithEmailAndPassword(this.auth, email, password)
            )

            const userData = {
                email: userCredential.user.email,
                uid: userCredential.user.uid,
            }

            if (this.isSessionStorageAvailable()) {
                sessionStorage.setItem('user', JSON.stringify(userData))
            }

            this.ngZone.run(() => {
                alert('Login Successful');
            })
        } catch (error: any) {
            console.error('Login error:', error)
            this.ngZone.run(() => {
                alert('Login Failed: ' + error.message)
            })
        }
    }

    logout() {
        if (this.isSessionStorageAvailable()) {
            sessionStorage.removeItem('user')
        }
        this.ngZone.run(() => {
            alert('Logged Out Successfully')
        })
    }

    getUser() {
        if (!this.isSessionStorageAvailable()) {
            return null
        }
        const user = sessionStorage.getItem('user')
        return user ? JSON.parse(user) : null
    }
}