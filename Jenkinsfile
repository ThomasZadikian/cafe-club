pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ThomasZadikian/cafe-club'
            }
        }
        stage('Build and Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose -f ./ up --build -d'
                }
            }
        }
        stage('Test') {
            steps {
                // Ajouter tes étapes de test ici
            }
        }
        stage('Teardown') {
            steps {
                script {
                    sh 'docker-compose -f path/to/docker-compose.yml down'
                }
            }
        }
        stage('Deploy to GitHub') {
            steps {
                script {
                    sh 'git config user.name "ThomasZadikian"'
                    sh 'git config user.email "Thoma.zadikian@gmail.com"'
                    
                    sh 'git add .'
                    sh 'git commit -m "Déploiement automatique depuis Jenkins"'
                    
                    withCredentials([usernamePassword(credentialsId: 'github-credentials-id', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                        sh 'git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/ton-repo-git.git HEAD:main'
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline terminé'
        }
        success {
            echo 'Pipeline réussi'
        }
        failure {
            echo 'Pipeline échoué'
        }
    }
}
