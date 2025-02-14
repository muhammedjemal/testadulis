"use client";
import React from "react";
import { motion } from "framer-motion";

const TermsPage: React.FC = () => {
  const termsLastUpdated = "December 23, 2024"; // Replace with actual date

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-3xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Terms and Conditions
      </h1>
      <div className="mb-2 text-sm text-gray-600 text-right">
        Last Updated: {termsLastUpdated}
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
            Welcome to the ADULIS ETHIOPIAN ART website (the "Site"). These
            Terms and Conditions ("Terms") govern your use of our website and
            services. By accessing or using the Site, you agree to comply with
            and be bound by these Terms. If you do not agree with these Terms,
            please do not use our website.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">2. Use of the Site</h3>
          <ul className="list-disc list-inside">
            <li>
              You must be at least 18 years old to use this Site or have the
              permission of a parent or guardian.
            </li>
            <li>
              You agree to use the Site for lawful purposes only. You must not
              use the Site in any way that breaches any applicable local,
              national, or international law or regulation.
            </li>
            <li>
              You agree not to interfere with, damage, or disrupt any part of
              the Site or any network or equipment used in the provision of the
              Site.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">3. Intellectual Property</h3>
          <p>
            All content on the Site, including but not limited to text,
            graphics, logos, images, and software, is the property of ADULIS
            ETHIOPIAN ART or its content suppliers and is protected by
            international copyright laws. You may not reproduce, distribute,
            modify, create derivative works from, publicly display, publicly
            perform, republish, download, store, or transmit any of the material
            on our Site, except as permitted under these Terms.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">
            4. Product Descriptions and Pricing
          </h3>
          <p>
            We strive to provide accurate descriptions and pricing for all
            artworks and products listed on the Site. However, we do not warrant
            that product descriptions or other content is accurate, complete,
            reliable, current, or error-free. Prices for artworks and services
            are subject to change without notice. We reserve the right to modify
            or discontinue any product or service without prior notice.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">5. Orders and Payment</h3>
          <p>
            All orders placed through the Site are subject to acceptance by us.
            We reserve the right to refuse or cancel any order for any reason.
            Payment must be made in full at the time of purchase through the
            payment methods provided on the Site. We are not responsible for any
            fees charged by your payment provider.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">6. Shipping and Returns</h3>
          <p>
            Shipping costs and delivery times vary depending on the destination
            and the artwork's size and weight. These will be calculated at
            checkout. We accept returns within 14 days of delivery, provided the
            artwork is in its original condition. Return shipping costs are the
            responsibility of the customer. Please contact us for return
            instructions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">7. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, ADULIS ETHIOPIAN ART shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses, resulting from (i) your use or inability
            to use the Site; (ii) any conduct or content of any third party on
            the Site.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">8. Changes to Terms</h3>
          <p>
            We reserve the right to update or modify these Terms at any time
            without prior notice. Your continued use of the Site following any
            changes constitutes acceptance of those changes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">9. Governing Law</h3>
          <p>
            These Terms and any dispute or claim arising out of or in connection
            with them shall be governed by and construed in accordance with the
            laws of [Country].
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-2">10. Contact Information</h3>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at
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
export default TermsPage;
