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

import IAuthenticatedFetcher from "../IAuthenticatedFetcher";
import IRequestCredentials from "../IRequestCredentials";
import { FetcherMockResponse } from "../../util/__mocks__/Fetcher";

/**
 * @hidden
 */
export const AuthenticatedFetcherResponse = FetcherMockResponse;

/**
 * @hidden
 */
export const AuthenticatedFetcherMock: jest.Mocked<IAuthenticatedFetcher> = {
  canHandle: jest.fn(
    async (
      /* eslint-disable @typescript-eslint/no-unused-vars */
      requestCredentials: IRequestCredentials,
      requestInfo: RequestInfo,
      requestInit: RequestInit
      /* eslint-enable @typescript-eslint/no-unused-vars */
    ) => true as boolean
  ),
  handle: jest.fn(
    async (
      /* eslint-disable @typescript-eslint/no-unused-vars */
      requestCredentials: IRequestCredentials,
      requestInfo: RequestInfo,
      requestInit: RequestInit
      /* eslint-enable @typescript-eslint/no-unused-vars */
    ) => AuthenticatedFetcherResponse
  )
};
