import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-blue-900 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Privacy Policy</h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-500">YourCompany</span>, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines the information we collect, how we use it, and your rights.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">1. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed">
          We may collect personal information such as your name, email address, phone number, and usage data when you:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Register or fill out a form on our site</li>
            <li>Contact our support or customer service</li>
            <li>Browse our website (via cookies or analytics)</li>
          </ul>
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700 leading-relaxed">
          Your information is used to:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Provide and improve our services</li>
            <li>Send updates, newsletters, or promotional materials</li>
            <li>Respond to customer service requests</li>
          </ul>
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">3. Data Sharing and Disclosure</h2>
        <p className="text-gray-700 leading-relaxed">
          We do <strong>not</strong> sell, trade, or rent your personal information. We may share data with trusted third-party partners only to operate our website and services, under strict confidentiality agreements.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">4. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 leading-relaxed">
          We use cookies to improve your browsing experience. You can manage your cookie preferences through your browser settings.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">5. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement appropriate security measures like encryption and secure server protocols to safeguard your data against unauthorized access or loss.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">6. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed">
          You have the right to access, update, or delete your personal information. To exercise your rights, please contact us using the email below.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">7. Updates to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy to reflect changes in our practices or legal requirements. Please check this page periodically for updates.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-2">8. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or concerns regarding this policy, please contact us at:
          <br />
          <a
            href="mailto:support@yourcompany.com"
            className="text-blue-600 underline mt-2 inline-block"
          >
           srkarsujoy715@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
