<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Tymon\JWTAuth\Middleware\GetUserFromToken;

class JwtAuth extends GetUserFromToken
{
    public function handle($request, Closure $next)
    {
        try {
            $token = jpdc(last(explode(' ', $request->header('authorization'))));

            if (empty($token) || (time() - $token['ts']) > 14400) {
                throw new Exception;
            }

        } catch (Exception $e) {
            return parent::handle($request, $next);
            // return abort(403, "Unauthorized request");
        }

        return $next($request);
    }
}
