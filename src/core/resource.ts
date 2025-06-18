// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MiriamStaging } from '../client';

export abstract class APIResource {
  protected _client: MiriamStaging;

  constructor(client: MiriamStaging) {
    this._client = client;
  }
}
