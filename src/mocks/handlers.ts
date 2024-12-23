import { fakerZH_CN as faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://example.com/user', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 400,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    })
  }),
  http.get('https://example.com/userlist', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      Array.from({ length: 10 }).map((_, idx) => ({
        id: idx,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      })),
    )
  }),
]
