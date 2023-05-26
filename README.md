# README - English
## Installation Steps

1. **Install WSL 2 (Windows Subsystem for Linux 2):** Follow the [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) provided by Microsoft to install and set up WSL 2 on your Windows machine.

2. **Install Docker Desktop:** Visit the [official Docker website](https://www.docker.com/products/docker-desktop) and download Docker Desktop for your operating system. Follow the installation instructions to complete the setup.

3. **Install Git:** Download and install Git from the [official Git website](https://git-scm.com/downloads) according to your operating system. Follow the installation instructions provided.

4. **Install Visual Studio Code (VSCode):** Go to the [official Visual Studio Code website](https://code.visualstudio.com/) and download the version suitable for your operating system. Follow the installation instructions to complete the setup.

5. **Install Node.js LTS (Long-Term Support):** Visit the [Node.js website](https://nodejs.org/) and download the LTS version for your operating system. Follow the installation instructions provided to install Node.js.

6. **Install PNPM:** Visit the [official documentation](https://pnpm.io/fr/installation#using-a-standalone-script) Follow the installation instructions provided.


7. **Clone the Repository:** Use Git to clone the repository by running the following commands in your CLI:
```bash
git clone https://github.com/Dercraker/NoSQL.git
pnpm install
code .
```

8. **Install Redis Stack on Docker:** Launch DockerHub, then your CLI and run the following command to install Redis stack using Docker:
    > docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

9. **Start Program :** On CLI in VSCode run the following command:
    > pnpm run start

*The project is now correctly installed and the data imported into the database*
