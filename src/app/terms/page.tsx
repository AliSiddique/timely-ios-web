import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TermsOfUse = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Terms of Use</h2>
      </CardHeader>
      <CardContent>
          <div className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
              <p>By using our Focus Timer and Todo App, you agree to these Terms of Use. If you do not agree, please do not use the app.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">2. App Description</h3>
              <p>Our app provides focus timer and todo list functionalities to help you manage your time and tasks effectively.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">3. Data Privacy and Storage</h3>
              <p>We prioritize your privacy. All data, including your todo lists and focus timer settings, are stored locally on your device. We do not collect, share, or transmit any of your personal data.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">4. User Responsibilities</h3>
              <p>You are responsible for maintaining the confidentiality of your device and the data stored within the app. We recommend using your device's built-in security features.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">5. Intellectual Property</h3>
              <p>The app and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">6. Limitations of Liability</h3>
              <p>We shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use the app.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">7. Changes to Terms</h3>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms of Use on this page.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">8. Contact Us</h3>
              <p>If you have any questions about these Terms, please contact us at alisiddique10@hotmail.com.</p>
            </section>
          </div>
      </CardContent>
   
    </Card>
  );
};

export default TermsOfUse;