import React from 'react';
import { FaAws, FaRocket, FaCode, FaCheckCircle } from 'react-icons/fa';

function SessionRequest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <FaAws className="text-6xl text-[#FF9900]" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Ready for Launch!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our Collaborative Interview Platform is complete and ready for deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-green-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Development Complete</h3>
              </div>
              <p className="text-gray-600">
                All features have been developed and thoroughly tested locally
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FaCode className="text-blue-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Ready to Scale</h3>
              </div>
              <p className="text-gray-600">
                Infrastructure code prepared for AWS deployment
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              AWS Infrastructure Requirements
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>EC2 instances for application servers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Amazon RDS for database management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Amazon S3 for static asset storage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>AWS Lambda for serverless functions</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-not-allowed opacity-75">
              <FaRocket className="mr-2" />
              Awaiting AWS Credits for Deployment
            </div>
            <p className="mt-4 text-gray-600">
              Contact us at amanvermaa9585@gmail.com for deployment inquiries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionRequest;