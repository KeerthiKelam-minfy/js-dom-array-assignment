// Easy

const heading = document.querySelector('#main-heading')
heading.textContent =  'My Awesome Shop'

const tagLine = document.querySelector('.tagline')
tagLine.innerHTML = "Find the <strong>best</strong> products here!"

const footerLine = document.querySelector('footer p')
footerLine.innerHTML = "&copy; 2025 Keerthi Kelam"


// Medium

const mainAppContainer = document.querySelector('#app-container')

const newItem1 = document.createElement('h2')
newItem1.textContent = 'About Us'

const newItem2 = document.createElement('p')
newItem2.textContent = 'We are a small team passionate about quality products.'

mainAppContainer.append(newItem1, newItem2)


// Hard

const contactInfo = document.createElement('div')
contactInfo.className = 'contact-info'

const emailPara = document.createElement('p')
emailPara.textContent = 'Email: contact@awesomeshop.com'

const phonePara = document.createElement('p')
phonePara.textContent = 'Phone: 123-456-7890'

contactInfo.append(emailPara, phonePara)

const footerElement = document.querySelector('footer')
document.body.insertBefore(contactInfo, footerElement)