/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @hidden
 * @packageDocumentation
 */

import { injectable, inject } from "tsyringe";
import { IStorageUtility } from "../../../storage/StorageUtility";
import { ITokenRequester } from "../TokenRequester";

/**
 * @hidden
 */
export interface ITokenRefresher {
  refresh(localUserId: string): Promise<void>;
}

/**
 * @hidden
 */
@injectable()
export default class TokenRefresher implements ITokenRefresher {
  constructor(
    @inject("storageUtility") private storageUtility: IStorageUtility,
    @inject("tokenRequester") private tokenRequester: ITokenRequester
  ) {}

  async refresh(localUserId: string): Promise<void> {
    // Get the refresh token and the issuer
    const refreshToken = await this.storageUtility.getForUser(
      localUserId,
      "refreshToken",
      { errorIfNull: true, secure: true }
    );
    /* eslint-disable @typescript-eslint/camelcase */
    await this.tokenRequester.request(localUserId, {
      grant_type: "refresh_token",
      refresh_token: refreshToken as string // This cast can be safely made because getForUser will error if refreshToken is null
    });
    /* eslint-enable @typescript-eslint/camelcase */
  }
}
