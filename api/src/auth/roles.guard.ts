// api/src/auth/roles.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles =
      this.reflector.getAllAndOverride<string[]>('roles', [
        context.getHandler(),
        context.getClass(),
      ]) || [];

    if (requiredRoles.length === 0) {
      return true; // Si aucun rôle n'est requis, on autorise l'accès.
    }

    const { user } = context.switchToHttp().getRequest();
    // Le namespace doit correspondre exactement à celui de votre "Custom Action" sur Auth0.
    const userRoles: string[] = user['https://zooapi.com/roles'] || [];

    return requiredRoles.some((role) => userRoles.includes(role));
  }
}

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);