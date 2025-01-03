export interface PreOrder {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timestamp: string;
}

export const preorders: PreOrder[] = [];

export const addPreOrder = (
  name: string,
  email: string,
  phone: string
): { success: boolean; error?: string } => {
  // Check for duplicate email
  if (preorders.some((order) => order.email === email)) {
    return {
      success: false,
      error: "Энэ имэйл хаяг бүртгэгдсэн байна",
    };
  }

  // Add new pre-order
  preorders.push({
    firstName: name,
    lastName: "",
    email,
    phone,
    timestamp: new Date().toISOString(),
  });

  return { success: true };
};
