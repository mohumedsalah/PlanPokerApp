import Head from 'components/head';
import { NextPageWithLayout } from 'pages/_app';

import homeLayout from 'components/layout/home/home';

import siteConfig from 'site-config.json';

const TermOfService: NextPageWithLayout = () => {
	return (
		<>
			<Head title="Terms of Service" />
			<h1>Website Terms and Conditions of Use</h1>

			<h2 className="text-2xl mb-3">1. Terms</h2>

			<p className="mb-4">
				{`By accessing this Website, accessible from https://${siteConfig.site.domain}, you
        are agreeing to be bound by these Website Terms and Conditions of Use
        and agree that you are responsible for the agreement with any applicable
        local laws. If you disagree with any of these terms, you are prohibited
        from accessing this site. The materials contained in this Website are
        protected by copyright and trade mark law.`}
			</p>

			<h2 className="text-2xl mb-3">2. Use License</h2>

			<p className="mb-4">
				{`Permission is granted to temporarily download one copy of the materials
        on ${siteConfig.site.name}&nbsp;s Website for personal, non-commercial transitory
        viewing only. This is the grant of a license, not a transfer of title,
        and under this license you may not:`}
			</p>

			<ul className="mb-4 font-semibold">
				<li>modify or copy the materials;</li>
				<li>
					use the materials for any commercial purpose or for any
					public display;
				</li>
				<li>
					{`attempt to reverse engineer any software contained on ${siteConfig.site.name}&nbsp;s Website;`}
				</li>
				<li>
					remove any copyright or other proprietary notations from the
					materials; or
				</li>
				<li>
					transferring the materials to another person or
					&nbsp;mirror&nbsp; the materials on any other server.
				</li>
			</ul>

			<p className="mb-4">
				{`This will let ${siteConfig.site.name} to terminate upon violations of any of these
        restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format. These Terms of
        Service has been created with the help of the`}
				<a href="https://www.termsofservicegenerator.net">
					Terms Of Service Generator
				</a>
				.
			</p>

			<h2 className="text-2xl mb-3">3. Disclaimer</h2>

			<p className="mb-4">
				{`All the materials on ${siteConfig.site.name}’s Website are provided &nbsp;as
        is&nbsp;. ${siteConfig.site.name} makes no warranties, may it be expressed or
        implied, therefore negates all other warranties. Furthermore, ${siteConfig.site.name}
        does not make any representations concerning the accuracy or
        reliability of the use of the materials on its Website or otherwise
        relating to such materials or any sites linked to this Website.`}
			</p>

			<h2 className="text-2xl mb-3">4. Limitations</h2>

			<p className="mb-4">
				{`${siteConfig.site.name} or its suppliers will not be hold accountable
        for any damages that will arise with the use or inability to use the
        materials on ${siteConfig.site.name}’s Website, even if $
        {siteConfig.site.name} or an authorize representative of this Website
        has been notified, orally or written, of the possibility of such damage.
        Some jurisdiction does not allow limitations on implied warranties or
        limitations of liability for incidental damages, these limitations may
        not apply to you.`}
			</p>

			<h2 className="text-2xl mb-3">5. Revisions and Errata</h2>

			<p className="mb-4">
				{`The materials appearing on ${siteConfig.site.name}’s Website may include
        technical, typographical, or photographic errors. $
        {siteConfig.site.name} will not promise that any of the materials in
        this Website are accurate, complete, or current. ${siteConfig.site.name}{" "}
        may change the materials contained on its Website at any time without
        notice. ${siteConfig.site.name} does not make any commitment to update
        the materials.`}
			</p>

			<h2 className="text-2xl mb-3">6. Links</h2>

			<p className="mb-4">
				{`${siteConfig.site.name} has not reviewed all of the sites linked to its
        Website and is not responsible for the contents of any such linked site.
        The presence of any link does not imply endorsement by $
        {siteConfig.site.name} of the site. The use of any linked website is at
        the user’s own risk.`}
			</p>

			<h2 className="text-2xl mb-3">
				7. Site Terms of Use Modifications
			</h2>

			<p className="mb-4">
				{`${siteConfig.site.name} may revise these Terms of Use for its Website at
        any time without prior notice. By using this Website, you are agreeing
        to be bound by the current version of these Terms and Conditions of Use.`}
			</p>

			<h2 className="text-2xl mb-3">8. Your Privacy</h2>

			<p className="mb-4">Please read our Privacy Policy.</p>

			<h2 className="text-2xl mb-3">9. Governing Law</h2>

			<p className="mb-4">
				{`Any claim related to ${siteConfig.site.name}s Website shall be governed
        by the laws of sk without regards to its conflict of law provisions.`}
			</p>
		</>
	);
};

TermOfService.getLayout = homeLayout;

export default TermOfService;
