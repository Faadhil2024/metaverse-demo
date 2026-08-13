export type Tier = "free" | "creator" | "creator-pro" | "business";
export type User = { name: string; email: string; tier: Tier };

const KEY = "metaverse_demo_user";

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export function saveUser(user: User) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function setTier(tier: Tier) {
  const user = getUser();
  if (user) saveUser({ ...user, tier });
}

export function logout() {
  localStorage.removeItem(KEY);
}