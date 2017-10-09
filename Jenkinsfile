node {
    if (env.BRANCH_NAME == 'staging') {
        stage('Prepare Environment') {
            checkout scm
            def environment  = docker.build 'cloudbees-node'

            environment.inside {
                withEnv([
                    'npm_config_cache=npm-cache',
                    'HOME=.',
                ]) {
                    stage("Install") {
                        sh "rm -rf node_modules"
                        sh "npm install"
                        sh "gulp"
                    }
                }
            }
        }

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