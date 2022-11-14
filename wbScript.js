let meetingBtn = document.getElementsByClassName('dot1')[0];
let stratBtn = document.getElementsByClassName('dot2')[0];
let designBtn = document.getElementsByClassName('dot3')[0];
let seoBtn = document.getElementsByClassName('dot4')[0];
let devBtn = document.getElementsByClassName('dot5')[0];
let launchBtn = document.getElementsByClassName('dot6')[0];

let servicesTextHolder = document.getElementsByClassName('howItWorksText')[0];
let meetingText = "We will meet with your team to learn more about your company and the goals you are trying to accomplish. We understand that every business is unique, so it's important for us to know every detail about your business and what exactly you want to accomplish."
let stratText = "Using your businesses goals, brand, and beliefs, our strategy team discovers what you want to accomplish. We utilize SEO, paid advertisment, and content creation to drive users to your website so they can learn more about you."
let designText = "Every website design is made in-house and is specific to your industry and target market. A technology company website will have a different asthetic than a brick and mortar retail shop, so we make sure we are catering to your users in order to increase conversions and get your message across efficiently."
let devText = "Our developers build fully functional and responsive websites from the ground up. Anything you can envision, we can bring to life. We keep our clients updated regularly throughout the process to ensure project deadlines are met."
let seoText = "Creating content and staying up to date with industry trends is extrememly important to keep your website ranking high on Google. Our team will research local and national markets to find out what content is gaining traffic in comparision to others."
let launchText = "After we launch your site, our time together doesn't end there. Constantly improving the content and information your users consume is key to keeping your site ranking and performing well. Our team will send you monthly reports on your metrics in order to maximize your budget capabilities."

meetingBtn.addEventListener('click', e => {
    e.preventDefault();
    stratBtn.classList.remove('servicesActive');
    designBtn.classList.remove('servicesActive');
    devBtn.classList.remove('servicesActive');
    seoBtn.classList.remove('servicesActive');
    launchBtn.classList.remove('servicesActive');

    meetingBtn.classList.add('servicesActive');
    servicesTextHolder.innerText = meetingText;
})

stratBtn.addEventListener('click', e => {
    meetingBtn.classList.remove('servicesActive');
    designBtn.classList.remove('servicesActive');
    devBtn.classList.remove('servicesActive');
    seoBtn.classList.remove('servicesActive');
    launchBtn.classList.remove('servicesActive');

    stratBtn.classList.add('servicesActive');
    servicesTextHolder.innerText = stratText;
})

designBtn.addEventListener('click', e => {
    meetingBtn.classList.remove('servicesActive');
    stratBtn.classList.remove('servicesActive');
    devBtn.classList.remove('servicesActive');
    seoBtn.classList.remove('servicesActive');
    launchBtn.classList.remove('servicesActive');

    designBtn.classList.add('servicesActive');
    servicesTextHolder.innerText = designText;
})

devBtn.addEventListener('click', e => {
    meetingBtn.classList.remove('servicesActive');
    stratBtn.classList.remove('servicesActive');
    designBtn.classList.remove('servicesActive');
    seoBtn.classList.remove('servicesActive');
    launchBtn.classList.remove('servicesActive');

    devBtn.classList.add('servicesActive');
    servicesTextHolder.innerText = devText;
})

seoBtn.addEventListener('click', e => {
    meetingBtn.classList.remove('servicesActive');
    stratBtn.classList.remove('servicesActive');
    designBtn.classList.remove('servicesActive');
    devBtn.classList.remove('servicesActive');
    launchBtn.classList.remove('servicesActive');

    seoBtn.classList.add('servicesActive');
    servicesTextHolder.innerText = seoText;
})

launchBtn.addEventListener('click', e => {
    meetingBtn.classList.remove('servicesActive');
    stratBtn.classList.remove('servicesActive');
    designBtn.classList.remove('servicesActive');
    devBtn.classList.remove('servicesActive');
    seoBtn.classList.remove('servicesActive');

    launchBtn.classList.add('servicesActive');
    servicesTextHolder.innerText = launchText;
})