"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPage: React.FC = () => {
  const privacyLastUpdated = "December 23, 2024"; // Replace with actual date

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-3xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Privacy Policy
      </h1>
      <div className="mb-2 text-sm text-gray-600 text-right">
        Last Updated: {privacyLastUpdated}
      </div>
      <div className="text-gray-700 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">1. Introduction</h3>
          <p>
            ADULIS ETHIOPIAN ART ("we," "our," or "us") is committed to
            protecting your privacy. This Privacy Policy outlines the types of
            information we collect from you, how we use that information, and
            the steps we take to ensure its protection.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">2. Information We Collect</h3>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Personal Information:</span> When
              you visit the Site or place an order, we may collect personal
              information such as your name, email address, phone number,
              shipping address, and payment details.
            </li>
            <li>
              <span className="font-semibold">Non-Personal Information:</span>{" "}
              We may also collect non-personal information, such as your browser
              type, operating system, and IP address, to help us understand how
              visitors use our Site.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">3. How We Use Your Information</h3>
          <ul className="list-disc list-inside">
            <li>
              We use your personal information to process and fulfill your
              orders, communicate with you about your orders, and provide
              customer support.
            </li>
            <li>
              We may use your non-personal information for analytics purposes to
              improve our Site and services.
            </li>
            <li>
              With your consent, we may use your email address to send you
              newsletters or promotional offers. You may opt-out of receiving
              these communications at any time.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">4. Sharing Your Information</h3>
          <p>
            We do not sell or rent your personal information to third parties.
            We may share your information with trusted third-party service
            providers to help us operate the Site, process payments, and deliver
            products. We may disclose your information if required by law or in
            response to a valid legal request.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">5. Data Security</h3>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no internet
            transmission is entirely secure, and we cannot guarantee the
            absolute security of your information.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">6. Cookies</h3>
          <p>
            Our Site uses cookies to enhance your browsing experience. Cookies
            are small text files stored on your device by your browser. You can
            choose to disable cookies through your browser settings, but this
            may affect your ability to use certain features of the Site.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">7. Your Rights</h3>
          <ul className="list-disc list-inside">
            <li>
              You have the right to access, update, or delete your personal
              information. To do so, please contact us at{" "}
              <a
                href="mailto:info@adulisethiopianart.com"
                className="text-orange-500 hover:underline"
              >
                info@adulisethiopianart.com
              </a>
              .
            </li>
            <li>
              You also have the right to withdraw your consent to our use of
              your personal information at any time.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">8. Changes to Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            Your continued use of the Site after any changes constitutes your
            acceptance of the new Privacy Policy.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">9. Contact Information</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:info@adulisethiopianart.com"
              className="text-orange-500 hover:underline"
            >
              info@adulisethiopianart.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default PrivacyPage;
