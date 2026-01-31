"use client";

import SmoothScroll from "@/components/SmoothScroll";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <Navbar />

        <article className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12">
            Last updated: January 30, 2026
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Trivvi (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Trivvi platform, including our website at trivvi.io and our mobile applications (collectively, the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our Service.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to protecting your privacy and complying with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation. By using our Service, you consent to the collection and use of your information as described in this policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect personal information that you voluntarily provide when using our Service, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
                <li><strong>Business Information:</strong> For restaurant partners, we collect restaurant name, address, and contact details</li>
                <li><strong>Waitlist Information:</strong> <br/>For users: Email address and location preferences when you join our waitlist <br/> For Restaurants: Restaurant name, address, email. Addresses are collected for restaurants to determine eligibility based on areas with high user demand and proximity to said areas</li>
                <li><strong>Communications:</strong> Information you provide when contacting us for support or inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">Location Information</h3>
              <p className="text-gray-700 mb-4">
                Our Service uses location data to connect diners with nearby restaurant deals. We collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Waitlist Location:</strong> When joining our waitlist, you may optionally drop a pin on a map to indicate your area of interest. This helps us prioritize launch locations.</li>
                <li><strong>In-App Location:</strong> When using our mobile app, we access your device location only while the app is actively open and in use. We do not track your location in the background. You have the ability to disable in-app location access, to which the app will default to a location of your choosing. Location is important to provide relevant restaurant deals and offers to users, but real-time access to location in the app is not mandatory.</li>
                <li><strong>Restaurant Addresses:</strong> For restaurant partners, we collect business addresses to display on our map and calculate proximity to diners. Furthermore, we collect restaurant addresses to determine if the Trivvi Restaurant dashboard is available in your area. Availablity is based on areas with high user demand and proximity to said areas.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> You can decline to share location data, though this may limit certain features of the Service. We never sell your location data to third parties.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Usage Information</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain information when you use our Service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information</li>
                <li><strong>App Usage:</strong> Features used, deals viewed, and interactions within the app</li>
                <li><strong>Location:</strong> Location data collected while using the app, if you have enabled location services</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">Cookies and Similar Technologies</h3>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to improve your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the Service to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Service</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Provide the Service:</strong> To operate our platform, connect diners with restaurants, and deliver location-based deal notifications</li>
                <li><strong>Communications:</strong> To send you service updates, waitlist notifications, and marketing communications (with your consent)</li>
                <li><strong>Improve the Service:</strong> To analyze usage patterns, fix bugs, and develop new features</li>
                <li><strong>Customer Support:</strong> To respond to your inquiries and provide assistance</li>
                <li><strong>Business Operations:</strong> To process payments for restaurant partners and manage accounts</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and protect our legal rights</li>
                <li><strong>Launch Planning:</strong> To use aggregated, anonymized location data to prioritize which cities to launch in</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Legal Basis for Processing
              </h2>
              <p className="text-gray-700 mb-4">
                Under PIPEDA, we process your personal information based on:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Consent:</strong> You provide consent when creating an account, joining our waitlist, or opting in to communications</li>
                <li><strong>Contractual Necessity:</strong> Processing necessary to provide you with our Service</li>
                <li><strong>Legitimate Interests:</strong> For purposes like improving our Service, provided these interests do not override your privacy rights</li>
                <li><strong>Legal Obligations:</strong> When required by law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                How We Share Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> With third-party vendors who help us operate our Service, including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Email delivery services (for confirmations and notifications)</li>
                    <li>Cloud hosting providers</li>
                    <li>Payment processors (for restaurant subscriptions)</li>
                  </ul>
                </li>
                <li><strong>Restaurant Partners:</strong> Aggregated, anonymized data about deal performance (never individual user data)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide you with our Service</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="text-gray-700 mb-4">
                When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law.
              </p>
              <p className="text-gray-700 mb-4">
                Waitlist data is retained until we launch in your area and you create an account, or until you request deletion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Your Privacy Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Under PIPEDA and applicable privacy laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications or optional data collection</li>
                <li><strong>Complaint:</strong> File a complaint with the Office of the Privacy Commissioner of Canada</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, contact us at contact@trivvi.io. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security assessments</li>
                <li>Access controls limiting who can view your data</li>
              </ul>
              <p className="text-gray-700 mb-4">
                While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                International Data Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                Your information may be processed and stored in Canada and the United States, where our service providers operate. When we transfer data outside Canada, we ensure appropriate safeguards are in place to protect your information in accordance with PIPEDA.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Our Service is not intended for children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will delete it promptly. If you believe a child has provided us with personal information, please contact us at contact@trivvi.io.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. For significant changes, we may also notify you by email. Your continued use of the Service after changes take effect constitutes acceptance of the revised policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> contact@trivvi.io<br />
                <strong>Website:</strong> trivvi.io
              </p>
            </section>
          </div>
        </article>

        <div className="relative z-10 bg-white font-(family-name:--font-caudex) text-black [&_a]:text-black [&_span]:text-black [&_div]:text-black">
          <Footer
            logo={
              <Image
                src="/imageAssets/trivviLogo.svg"
                alt="Trivvi Logo"
                width={40}
                height={40}
              />
            }
            brandName="Trivvi"
            socialLinks={[
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "https://x.com/trivviapp?s=21",
                label: "X",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                ),
                href: "https://www.instagram.com/trivvi.io/",
                label: "Instagram",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                href: "mailto:contact@trivvi.io",
                label: "Email",
              },
            ]}
            mainLinks={[
              { href: "/for-diners", label: "For Diners" },
              { href: "/for-restaurants", label: "For Restaurants" },
              { href: "/about", label: "About" },
              { href: "mailto:contact@trivvi.io", label: "Contact" },
            ]}
            legalLinks={[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ]}
            copyright={{
              text: "© 2026 Trivvi",
              license: "All rights reserved",
            }}
          />
        </div>
      </main>
    </SmoothScroll>
  );
}
