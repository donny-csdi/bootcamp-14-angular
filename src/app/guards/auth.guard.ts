import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"
import { Router } from "@angular/router"

export const authGuard = () => {
    const authService = inject(AuthService)
    const router = inject(Router)

    const user = authService.getUser()
    
    if (!user) {
        router.navigate(['/login'])
        return false
    }

    return true
}