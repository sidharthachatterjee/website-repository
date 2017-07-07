node {
    if (env.BRANCH_NAME == 'staging') {
        checkout scm

        stage("Archive Build") {
            archive (includes: '**')
        }

        stage("Deploy to Staging") {
            sshagent(credentials: ['44adb942-6d5f-40e0-a9be-141d9f3855d9']) {
                sh 'ssh ubuntu@46.101.67.24 mkdir -p /home/ubuntu/Projects/builds/fe.homepage/${BUILD_ID}'
                sh 'scp -r * ubuntu@46.101.67.24:/home/ubuntu/Projects/builds/fe.homepage/${BUILD_ID}'
                sh 'ssh ubuntu@46.101.67.24 ln -sfn /home/ubuntu/Projects/builds/fe.homepage/${BUILD_ID} /home/ubuntu/Projects/fe.homepage'
            }
        }
    }
}

node {

    if (env.BRANCH_NAME == 'develop') {
        checkout scm

        stage("Archive Build") {
            archive (includes: '**')
        }

        stage("Deploy to Staging") {
            sshagent(credentials: ['44adb942-6d5f-40e0-a9be-141d9f3855d9']) {
                sh 'ssh ubuntu@46.101.67.24 mkdir -p /home/ubuntu/Projects/builds/fe.homepage/${BUILD_ID}'
                sh 'scp -r * ubuntu@46.101.67.24:/home/ubuntu/Projects/builds/fe.homepage/${BUILD_ID}'
                sh 'ssh ubuntu@46.101.67.24 ln -sfn /home/ubuntu/Projects/builds/fe.homepage/${BUILD_ID} /home/ubuntu/Projects/fe.homepage'
                sh 'ssh ubuntu@46.101.67.24 /home/ubuntu/Projects/fe.homepage/build.sh'
                sh 'ssh ubuntu@46.101.67.24 sudo setfacl -dR -m u:www-data:rwX -m u:ubuntu:rwX /home/ubuntu/Projects/fe.homepage/var'
                sh 'ssh ubuntu@46.101.67.24 sudo setfacl -R -m u:www-data:rwX -m u:ubuntu:rwX /home/ubuntu/Projects/fe.homepage/var'
            }
        }

        stage("Run Unit and Integration Tests") {
            sshagent(credentials: ['44adb942-6d5f-40e0-a9be-141d9f3855d9']) {
                sh 'ssh ubuntu@46.101.67.24 "cd /home/ubuntu/Projects/fe.homepage && /usr/local/bin/phpunit"'
            }
        }
    }
}