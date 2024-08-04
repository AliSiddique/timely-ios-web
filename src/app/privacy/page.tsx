import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Privacy Policy</h2>
      </CardHeader>
      <CardContent>
          <div className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold">1. Introduction</h3>
              <p>This Privacy Policy outlines how our Focus Timer and Todo App ("we", "our", or "app") handles your data. We are committed to protecting your privacy and ensuring you feel confident about using our app.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">2. Information Collection and Use</h3>
              <p>Our app does not collect, transmit, or share any personal data. All information you input, including your todo lists and focus timer settings, is stored locally on your device and is not accessible by us or any third parties.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">3. Data Storage</h3>
              <p>All data is stored locally on your iOS device. We do not have access to this data, nor do we back it up on external servers. You are responsible for backing up your device to prevent data loss.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">4. Data Security</h3>
              <p>While we do not handle your data directly, we encourage you to protect your device with a passcode, Face ID, or Touch ID to prevent unauthorized access to your app data.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">5. Third-Party Access</h3>
              <p>We do not share any data with third parties because we do not collect or have access to any of your data.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">6. Children's Privacy</h3>
              <p>Our app does not knowingly collect or store personal information from children under 13. As all data is stored locally, parents or guardians are responsible for monitoring their children's device usage.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">7. Changes to This Policy</h3>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the app.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">8. Your Rights</h3>
              <p>As we do not collect or store your data, there is no need for processes related to accessing, correcting, or deleting your data from our servers. All such actions can be performed directly on your device.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold">9. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at alisiddique10@hotmail.com.</p>
            </section>
          </div>
      </CardContent>
     
    </Card>
  );
};

export default PrivacyPolicy;