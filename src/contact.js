function createContact() {
    const contact = document.createElement('div')
    const contactCon = document.createElement('div')
    contact.classList.add('contact')
    contactCon.classList.add('contactCon')
    

    contactCon.appendChild(createContactInfo(
      "Location",
      "No 12, Adeola Odeku Street",
      "Victoria Island, Lagos Nigeria"
    ))

    contactCon.appendChild(createContactInfo(
      "Hours",
      "Mon - Thur, 8 am - 10 pm",
      "Fri - Sun,  8 am - 11 pm"
    ))
  
     contactCon.appendChild(createContactInfo(
      "Contact",
      "081-2667-1564",
      "spagcontinental@gmail.com"
    ))

  
    contact.appendChild(contactCon)

    return contact
  }

  function createContactInfo(header, lineOne, lineTwo) {
    const contactInfo = document.createElement('div')
    const title = document.createElement("h1")
    const content1 = document.createElement("p")
    const content2 = document.createElement("p")

    contactInfo.classList.add("content")

    title.textContent = header
    content1.textContent = lineOne
    content2.textContent = lineTwo

    contactInfo.appendChild(title)
    contactInfo.appendChild(content1)
    contactInfo.appendChild(content2)

    return contactInfo

  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact