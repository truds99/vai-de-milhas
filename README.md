# Miles Service Backend Unit Tests

This project contains backend unit tests implemented in TypeScript for a miles calculation service. The goal was to apply testing to the service functions to ensure their correctness and robustness using tools like Jest and Faker.

- **Miles Calculation**: Test cases for calculating miles based on different service classes, affiliate statuses, and other factors like birthday bonuses.
- **Helper Functions**: Validates the functionality of helper functions such as service class multipliers, affiliate bonuses, and birthday bonuses.
- **Error Handling**: Tests ensure that errors are handled properly in all edge cases.
- **Unit Tests**: Ensures that each service function performs as expected in isolation.
- **Jest**: Framework used for writing and executing test cases.
- **Faker**: Utilized for generating random and realistic test data during testing.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
    <img style='margin: 5px;' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="40" alt="Node.js logo" /> 
    <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" height="40" alt="TypeScript logo" /> 
    <img style='margin: 5px;' src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="40" alt="Jest logo" /> 
    <img style='margin: 5px;' src="https://img.shields.io/badge/Faker.js-83B81A?style=for-the-badge&logo=faker&logoColor=white" height="40" alt="Faker.js logo" /> 
</p>

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/miles-service-backend-tests.git
cd miles-service-backend-tests
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env and a .env.test file in the root directory and add your MongoDB URI, server port, and JWT secret.

```bash
DATABASE_URL=your_database_url
PORT=your_port_number
```

### 4. Running Tests

Run the unit tests using the following command:

```bash
npm run test:unit
```
## Contributing

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes and commit them (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a pull request.
