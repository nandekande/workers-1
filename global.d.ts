declare module "next/headers" {
  type MinimalCookiesStore = {
    get(name: string): { value: string } | undefined;
  }
  export function cookies(): Promise<MinimalCookiesStore>;
}