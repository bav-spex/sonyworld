set -e

#cat $ENV_NODE > jenkins.env.json

echo "building image"
img build  --build-arg BUILD_NUMBER=${BUILD_NUMBER} --build-arg NODE_CONFIG_ENV=${NODE_ENV} -f Dockerfile  -t $ECR_URL/sony-${DEPLOY_ENV}-${DEPLOYMENT_NAME}:${BUILD_NUMBER} .
echo "Logging into Container Registry"
aws ecr get-login-password --region eu-central-1 | img login --user AWS --password-stdin $ECR_URL
#echo "$ACR_PASS" | img login -u $ACR_USERNAME --password-stdin $ACR_URL
echo "Pushing NODE image"
img push $ECR_URL/sony-${DEPLOY_ENV}-${DEPLOYMENT_NAME}:${BUILD_NUMBER}
