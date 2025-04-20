import crypto from 'crypto';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'your-fallback-32-char-encryption-key!!'; // Must be 32 characters
const IV_LENGTH = 16; // For AES, this is always 16

// Add a prefix to identify encrypted messages
const ENCRYPTION_PREFIX = 'encrypted:';

export const encryptMessage = (text: string): string => {
  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return ENCRYPTION_PREFIX + iv.toString('hex') + ':' + encrypted.toString('hex');
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt message');
  }
};

export const decryptMessage = (text: string): string => {
  try {
    // If the message isn't encrypted, return it as-is
    if (!text.startsWith(ENCRYPTION_PREFIX)) {
      return text;
    }

    // Remove the encryption prefix
    const encryptedText = text.slice(ENCRYPTION_PREFIX.length);
    
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift()!, 'hex');
    const encrypted = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encrypted);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (error) {
    console.error('Decryption error:', error);
    // Return original text if decryption fails
    return text;
  }
};

// Helper function to check if a message is encrypted
export const isEncrypted = (text: string): boolean => {
  return text.startsWith(ENCRYPTION_PREFIX);
}; 