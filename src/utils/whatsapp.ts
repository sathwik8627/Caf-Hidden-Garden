/**
 * WhatsApp Integration Utility for Café Hidden Garden
 * Generates formatted WhatsApp messages for table reservations and food/beverage orders.
 */

import { CartItem, Order, Reservation } from '../types';

export const CAFE_WHATSAPP_NUMBER = '919154273364'; // International format without + or spaces (e.g. +91 91542 73364)
export const CAFE_DISPLAY_PHONE = '+91 91542 73364';

/**
 * Creates a clean WhatsApp URL with encoded text payload
 */
export function buildWhatsAppLink(message: string, phone: string = CAFE_WHATSAPP_NUMBER): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Opens WhatsApp in a new tab/window safely
 */
export function openWhatsAppChat(message: string, phone: string = CAFE_WHATSAPP_NUMBER): void {
  const url = buildWhatsAppLink(message, phone);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Formats a Table Reservation into a structured WhatsApp message
 */
export function formatReservationWhatsAppMessage(res: {
  referenceCode?: string;
  guestName: string;
  phone: string;
  email?: string;
  date: string;
  timeSlot: string;
  guests: number;
  seatingAreaName: string;
  occasion?: string;
  specialRequests?: string;
}): string {
  const lines: string[] = [
    '🌿 *CAFÉ HIDDEN GARDEN — TABLE RESERVATION* 🌿',
    '_• Hide Away and Find Nature •_',
    '',
    res.referenceCode ? `📋 *Booking Reference:* ${res.referenceCode}` : '📋 *Request:* New Table Reservation',
    `👤 *Guest Name:* ${res.guestName}`,
    `📞 *Phone:* ${res.phone}`,
    res.email ? `✉️ *Email:* ${res.email}` : '',
    `📅 *Date:* ${res.date}`,
    `⏰ *Time Slot:* ${res.timeSlot}`,
    `👥 *Party Size:* ${res.guests} ${res.guests === 1 ? 'Guest' : 'Guests'}`,
    `🏛️ *Seating Oasis:* ${res.seatingAreaName}`,
    res.occasion ? `✨ *Occasion:* ${res.occasion}` : '',
    res.specialRequests ? `📝 *Special Requests:* "${res.specialRequests}"` : '',
    '',
    '----------------------------------------',
    '💬 *Hello Café Hidden Garden Concierge!* Please confirm my table reservation. Looking forward to our visit! ☕🌿'
  ].filter(line => line !== undefined && line !== '');

  return lines.join('\n');
}

/**
 * Formats a Takeaway or Table Order into an itemized WhatsApp message
 */
export function formatOrderWhatsAppMessage(orderData: {
  orderNumber: string;
  orderType: 'takeaway' | 'table_order';
  tableNumber?: string;
  customerName: string;
  phone: string;
  items: CartItem[];
  subtotal: number;
  discount?: number;
  discountAmount?: number;
  tax: number;
  tip: number;
  total: number;
  specialNotes?: string;
}): string {
  const itemsText = orderData.items
    .map((item, idx) => {
      const optionsList = Object.entries(item.selectedOptions)
        .map(([k, v]) => `   • ${k}: ${v}`)
        .join('\n');

      const customNote = item.specialInstructions
        ? `\n   • Note: "${item.specialInstructions}"`
        : '';

      return `${idx + 1}. *${item.menuItem.name}* (x${item.quantity}) — ₹${item.totalPrice.toFixed(2)}${optionsList ? `\n${optionsList}` : ''}${customNote}`;
    })
    .join('\n\n');

  const lines: string[] = [
    '☕ *CAFÉ HIDDEN GARDEN — NEW ORDER* ☕',
    '_• Hide Away and Find Nature •_',
    '',
    `🧾 *Order ID:* #${orderData.orderNumber}`,
    `📍 *Order Type:* ${orderData.orderType === 'takeaway' ? '🥡 Takeaway Pick-Up' : `🍽️ Dine-in Table Service (${orderData.tableNumber || 'Table specified on arrival'})`}`,
    `👤 *Customer Name:* ${orderData.customerName}`,
    `📞 *Contact:* ${orderData.phone}`,
    '',
    '🛍️ *ITEMIZED BOTANICAL ORDER:*',
    '----------------------------------------',
    itemsText,
    '----------------------------------------',
    `*Subtotal:* ₹${orderData.subtotal.toFixed(2)}`,
    orderData.discountAmount && orderData.discountAmount > 0
      ? `*Promo Discount (${orderData.discount}%):* -₹${orderData.discountAmount.toFixed(2)}`
      : '',
    `*GST (5.0%):* ₹${orderData.tax.toFixed(2)}`,
    orderData.tip > 0 ? `*Barista Gratuity:* ₹${orderData.tip.toFixed(2)}` : '',
    `*TOTAL PAYABLE:* ₹${orderData.total.toFixed(2)}`,
    '----------------------------------------',
    orderData.specialNotes ? `📝 *Order Instructions:* ${orderData.specialNotes}\n` : '',
    '💬 *Hello Café Hidden Garden Team!* I have placed this order. Please prepare it for me. Thank you! 🌿'
  ].filter(line => line !== undefined && line !== '');

  return lines.join('\n');
}

/**
 * Formats an Order Inquiry for WhatsApp
 */
export function formatOrderInquiryWhatsAppMessage(order: Order): string {
  return [
    '🌿 *CAFÉ HIDDEN GARDEN — ORDER STATUS INQUIRY* 🌿',
    '',
    `Hi! I'd like to check on the status of my order *#${order.orderNumber}*.`,
    `• Name: ${order.customerName}`,
    `• Type: ${order.orderType === 'takeaway' ? 'Takeaway' : `Table Order (${order.tableNumber || 'Dine-in'})`}`,
    `• Total: ₹${order.total.toFixed(2)}`,
    '',
    'Thank you!'
  ].join('\n');
}

/**
 * General Inquiries
 */
export function formatGeneralInquiryWhatsAppMessage(topic: string = 'General Inquiry'): string {
  return [
    '🌿 *CAFÉ HIDDEN GARDEN — INQUIRY* 🌿',
    '_• Hide Away and Find Nature •_',
    '',
    `Hello! I have an inquiry regarding: *${topic}*.`,
    'Could you please assist me?',
    '',
    'Thank you!'
  ].join('\n');
}
