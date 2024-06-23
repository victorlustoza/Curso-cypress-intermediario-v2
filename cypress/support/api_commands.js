const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('api_createProject', project => {
  cy.api({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true
    },
    headers: {
      Authorization: accessToken
    }
  })
})

Cypress.Commands.add('api_getAllProjects', () => {
  cy.api({
    method: 'GET',
    url: '/api/v4/projects/',
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_deleteProjects', () => {
  cy.api_getAllProjects()
    .then(response =>
      response.body.forEach(project => cy.api({
        method: 'DELETE',
        url: `/api/v4/projects/${project.id}`,
        headers: { Authorization: accessToken },
      }))
    )
})

Cypress.Commands.add('api_createIssue', issue => {
  cy.api_createProject(issue.project)
    .then(response => {
      cy.api({
        method: 'POST',
        url: `/api/v4/projects/${response.body.id}/issues`,
        body: {
          title: issue.title,
          description: issue.description
        },
        headers: { Authorization: accessToken }
      })
    })
})

Cypress.Commands.add('api_createLabel', (projectId, label) => {
  cy.api({
    method: 'POST',
    url: `/api/v4/projects/${projectId}/labels`,
    body: {
      name: label.name,
      color: label.color
    },
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_createMilestone', (projectId, milestone) => {
  cy.api({
    method: 'POST',
    url: `/api/v4/projects/${projectId}/milestones`,
    body: { title: milestone.title },
    headers: { Authorization: accessToken },
  })
})