import React from 'react'

const FAQ = () => {
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <p>Have question? We are here to help</p>
        <section className='services'>
            <div className='service-right'>
                <div className='qa'>
                    <input type="checkbox" id='collapsible-head-1' />
                    <label for = "collapsible-head-1">How far in advance should I book a session with your photography studio?</label>
                    <div className='collapsible-text-1'>
                        <p>To ensure availability, we recommend booking your session at least 2-3 months in advance, especially during peak seasons. However, feel free to check our schedule for any last-minute openings.</p>
                    </div>
                </div>
                <div className='qa'>
                <input type="checkbox" id="collapsible-head-2" />
                <label for="collapsible-head-2">What sets your photography studio apart from others?</label>
                <div class="collapsible-text-2">
                    <p>Our studio is distinguished by a unique blend of artistic vision, technical expertise, and a personalized approach to every client. We strive to capture not just images but stories, making each session a memorable and tailored experience.</p>
                </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-3" />
                    <label for="collapsible-head-3">Can I customize my photography package to suit my specific needs?</label>
                    <div class="collapsible-text-3">
                        <p>Absolutely! We understand that each client is unique, and we offer customizable packages to meet your specific requirements. Whether it's a special event, portrait session, or commercial project, we'll work with you to create the perfect package.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-4" />
                    <label for="collapsible-head-4">How long does it take to receive the final edited photos from a session or event?</label>
                    <div class="collapsible-text-4">
                        <p>The turnaround time for edited photos depends on the type and scale of the project. Typically, you can expect to receive a sneak peek within a week, with the full set delivered within 2-4 weeks. For urgent requests, we offer expedited processing options.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-5" />
                    <label for="collapsible-head-5">Do you provide hair and makeup services for portrait sessions or events?</label>
                    <div class="collapsible-text-5">
                        <p>While our primary focus is on photography, we have trusted partnerships with professional hair and makeup artists. We can certainly arrange these services for you upon request, ensuring you look and feel your best during the photo session.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-6" />
                    <label for="collapsible-head-6">What types of photography do you specialize in?</label>
                    <div class="collapsible-text-6">
                        <p>Our studio specializes in a diverse range of photography, including portrait sessions, family photography, event coverage, commercial photography, and more. Our team of skilled photographers has expertise in various styles, ensuring we can cater to your specific needs and preferences.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FAQ