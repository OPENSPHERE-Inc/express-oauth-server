// Type definitions for @node-oauth/express-oauth-server 3.0.0
// Project: https://github.com/node-oauth/express-oauth-server
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import core from "express-serve-static-core";
import * as OAuth2Server from "@node-oauth/oauth2-server";

declare namespace ExpressOAuthServer {
  interface Options extends OAuth2Server.ServerOptions {
    useErrorHandler?: boolean | undefined;
    continueMiddleware?: boolean | undefined;
  }
}

declare class ExpressOAuthServer {
  server: OAuth2Server;

  constructor(options: ExpressOAuthServer.Options);

  authenticate(
    options?: OAuth2Server.AuthenticateOptions
  ): (
    request: core.Request,
    response: core.Response,
    next: core.NextFunction
  ) => Promise<OAuth2Server.Token>;

  authorize(
    options?: OAuth2Server.AuthorizeOptions
  ): (
    request: core.Request,
    response: core.Response,
    next: core.NextFunction
  ) => Promise<OAuth2Server.AuthorizationCode>;

  token(
    options?: OAuth2Server.TokenOptions
  ): (
    request: core.Request,
    response: core.Response,
    next: core.NextFunction
  ) => Promise<OAuth2Server.Token>;
}

export = ExpressOAuthServer;
