export function emailToLink(email) {
  return `mailto:${email}`;
}

export function phoneToLink(phone) {
  const strippedPhone = phone.replace(/\D/g, "");
  return `tel:+${strippedPhone}`;
}
