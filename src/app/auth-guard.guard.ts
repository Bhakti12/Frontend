import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './Service/AuthService';
import { inject } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn().pipe(
    map((loggedIn) =>
      loggedIn
        ? true
        : router.createUrlTree([router.parseUrl('/login')], {
            queryParams: { loggedOut: true, origUrl: state.url },
          })
    ),
    catchError((err) => {
      router.navigate(['/login'], {
        queryParams: { loggedOut: true, origUrl: state.url },
      });
      return of(false);
    })
  );
};
