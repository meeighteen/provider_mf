export class Container {
  private registry = new Map<string, unknown>();

  register<T>(token: string, instance: T): void {
    this.registry.set(token, instance);
  }

  resolve<T>(token: string): T {
    const instance = this.registry.get(token);
    if (!instance) {
      throw new Error(`[Container] No hay registro para: "${token}"`);
    }
    return instance as T;
  }
}