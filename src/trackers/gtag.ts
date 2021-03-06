import { loadGTag } from '../utils/externalServices';
import { BaseTracker, PageMeta } from './base';

export interface GTagOptions {
  trackingId: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

export class GTagTracker extends BaseTracker {
  constructor(private options: GTagOptions) {
    super();
  }

  private tagCalled = false;

  public async initialize(): Promise<void> {
    await loadGTag(this.options.trackingId);
    this.tagCalled = true;
  }

  public isInitialized(): boolean {
    return this.tagCalled;
  }

  public sendPageView(pageMeta: PageMeta, ts?: Date): void {}

  public sendEvent(
    name: string,
    data?: Record<string, unknown>,
    ts?: Date,
  ): void {}

  public sendAddPaymentInfo(args?: Record<string, unknown>, ts?: Date): void {}

  public sendImpression(args?: Record<string, unknown>, ts?: Date): void {}

  public sendSignUp(args?: Record<string, unknown>, ts?: Date): void {}

  public sendStartSubscription(
    args?: Record<string, unknown>,
    ts?: Date,
  ): void {}
}
