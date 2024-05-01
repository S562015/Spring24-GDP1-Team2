# Non-functional Requirements List (Iteration 1)

## NFR #1: Aspirant Authentication

Ensures secure user access by implementing authentication during Aspirant registration and with each subsequent login using Firebase.

Example:
* Aspirants will undergo a secure identity verification process through Firebase during registration.
* Firebase Authentication will be integrated to verify Aspirants with every login.

## NFR #2: Employer Authentication

Focuses on secure access for Employers, requiring authentication during registration and for each login using Firebase to maintain system security.

Example:
* Employers must verify their identity through Firebase during the registration process.
* For each login, Employers will use mandatory authentication, ensuring a secure access point to the system.

## NFR #3: User Data Security

Enhances overall security by whitelisting API URLs in the node, restricting access to user data to authorized sources.

Example:
* User data security will be reinforced by whitelisting API URLs in the node, ensuring access is restricted to authenticated and authorized sources.

## NFR #4: Prevention of SQL Injection Attacks

Mitigates the risk of SQL Injection attacks by whitelisting of API URLs for enhanced system security.

Example:
* SQL Injection prevention measures will be implemented, incorporating whitelisting of API URLs.
