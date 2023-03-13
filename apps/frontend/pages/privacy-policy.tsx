import Head from 'components/head';
import { NextPageWithLayout } from 'pages/_app';

import siteConfig from 'site-config.json';

const PrivacyPolicy: NextPageWithLayout = () => {
	return (
		<>
			<Head title="Privacy Policy" />
			<h1>Privacy Policy for ${siteConfig.site.name}</h1>

			<p className="mb-4">
				{`At ${siteConfig.site.name}, accessible from https://${siteConfig.site.domain}, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by ${siteConfig.site.name} and how we use it.`}
			</p>

			<p className="mb-4">
				If you have additional questions or require more information
				about our Privacy Policy, do not hesitate to contact us. Our
				Privacy Policy was generated with the help of{' '}
				<a href="https://www.gdprprivacypolicy.net/">
					GDPR Privacy Policy Generator from GDPRPrivacyPolicy.net
				</a>
			</p>

			<h2 className="text-2xl mb-3">
				General Data Protection Regulation (GDPR)
			</h2>
			<p className="mb-4">
				We are a Data Controller of your information.
			</p>

			<p className="mb-4">
				{`${siteConfig.site.name} legal basis for collecting and using the personal
        information described in this Privacy Policy depends on the Personal
        Information we collect and the specific context in which we collect the
        information:`}
			</p>
			<ul className="mb-2 font-semibold">
				<li>{`${siteConfig.site.name} needs to perform a contract with you`}</li>
				<li>
					You have given ${siteConfig.site.name} permission to do so
				</li>
				<li>
					Processing your personal information is in $
					{siteConfig.site.name} legitimate interests
				</li>
				<li>{`${siteConfig.site.name} needs to comply with the law`}</li>
			</ul>

			<p className="mb-4">
				{`${siteConfig.site.name} will retain your personal information only for as long as is
        necessary for the purposes set out in this Privacy Policy. We will
        retain and use your information to the extent necessary to comply with
        our legal obligations, resolve disputes, and enforce our policies.`}
			</p>

			<p className="mb-4">
				If you are a resident of the European Economic Area (EEA), you
				have certain data protection rights. If you wish to be informed
				what Personal Information we hold about you and if you want it
				to be removed from our systems, please contact us.
			</p>

			<p className="mb-4">
				In certain circumstances, you have the following data protection
				rights:
			</p>
			<ul className="mb-2 font-semibold">
				<li>
					The right to access, update or to delete the information we
					have on you.
				</li>
				<li>The right of rectification.</li>
				<li>The right to object.</li>
				<li>The right of restriction.</li>
				<li>The right to data portability</li>
				<li>The right to withdraw consent</li>
			</ul>

			<h2 className="text-2xl mb-3">Log Files</h2>

			<p className="mb-4">
				{`${siteConfig.site.name} follows a standard procedure of using log files. These files
        log visitors when they visit websites. All hosting companies do this and
        a part of hosting services&nbsp; analytics. The information collected by
        log files include internet protocol (IP) addresses, browser type,
        Internet Service Provider (ISP), date and time stamp, referring/exit
        pages, and possibly the number of clicks. These are not linked to any
        information that is personally identifiable. The purpose of the
        information is for analyzing trends, administering the site, tracking
        users&nbsp; movement on the website, and gathering demographic
        information.`}
			</p>

			<h2 className="text-2xl mb-3">Cookies and Web Beacons</h2>

			<p className="mb-4">
				{`Like any other website, ${siteConfig.site.name} uses &nbsp;cookies&nbsp;. These
        cookies are used to store information including visitors&nbsp;
        preferences, and the pages on the website that the visitor accessed or
        visited. The information is used to optimize the users&nbsp; experience
        by customizing our web page content based on visitors&nbsp; browser type
        and/or other information.`}
			</p>

			<p className="mb-4">
				For more general information on cookies, please read{' '}
				<a href="https://www.generateprivacypolicy.com/#cookies">
					&nbsp;Cookies&nbsp; article from the Privacy Policy
					Generator
				</a>
				.
			</p>

			<h2 className="text-2xl mb-3">Google DoubleClick DART Cookie</h2>

			<p className="mb-4">
				Google is one of a third-party vendor on our site. It also uses
				cookies, known as DART cookies, to serve ads to our site
				visitors based upon their visit to www.website.com and other
				sites on the internet. However, visitors may choose to decline
				the use of DART cookies by visiting the Google ad and content
				network Privacy Policy at the following URL –{' '}
				<a href="https://policies.google.com/technologies/ads">
					https://policies.google.com/technologies/ads
				</a>
			</p>

			<h2 className="text-2xl mb-3">Privacy Policies</h2>

			<p className="mb-4">
				{`You may consult this list to find the Privacy Policy for each of the
        advertising partners of ${siteConfig.site.name}.`}
			</p>

			<p className="mb-4">
				{`Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on ${siteConfig.site.name}, which are sent
        directly to users&nbsp; browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.`}
			</p>

			<p className="mb-4">
				{`Note that ${siteConfig.site.name} has no access to or control over these cookies
        that are used by third-party advertisers.`}
			</p>

			<h2 className="text-2xl mb-3">Third Party Privacy Policies</h2>

			<p className="mb-4">
				{`${siteConfig.site.name}&nbsp;s Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.`}
			</p>

			<p className="mb-4">
				You can choose to disable cookies through your individual
				browser options. To know more detailed information about cookie
				management with specific web browsers, it can be found at the
				browsers&nbsp; respective websites.
			</p>

			<h2 className="text-2xl mb-3">Children&nbsp;s Information</h2>

			<p className="mb-4">
				Another part of our priority is adding protection for children
				while using the internet. We encourage parents and guardians to
				observe, participate in, and/or monitor and guide their online
				activity.
			</p>

			<p className="mb-4">
				{`${siteConfig.site.name} does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.`}
			</p>

			<h2 className="text-2xl mb-3">Online Privacy Policy Only</h2>

			<p className="mb-4">
				{`Our Privacy Policy created at GDPRPrivacyPolicy.net applies only to our
        online activities and is valid for visitors to our website with regards
        to the information that they shared and/or collect in ${siteConfig.site.name}. This
        policy is not applicable to any information collected offline or via
        channels other than this website.`}
			</p>

			<h2 className="text-2xl mb-3">Consent</h2>

			<p className="mb-4">
				By using our website, you hereby consent to our Privacy Policy
				and agree to its terms.
			</p>
		</>
	);
};

export default PrivacyPolicy;
