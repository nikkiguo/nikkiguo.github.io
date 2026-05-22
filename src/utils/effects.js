import { useEffect } from 'react'

// Initialize scroll animations and interactions
export function initializePageEffects() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href && href !== '#') {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    })
  })

  // Add active state to navigation links on scroll
  const updateActiveLink = () => {
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
        const id = section.getAttribute('id')
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active')
        })
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`)
        if (activeLink) {
          activeLink.classList.add('active')
        }
      }
    })
  }

  window.addEventListener('scroll', updateActiveLink)
  updateActiveLink() // Call once on load

  return () => {
    window.removeEventListener('scroll', updateActiveLink)
  }
}
