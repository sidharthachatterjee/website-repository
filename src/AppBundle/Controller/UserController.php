<?php

namespace AppBundle\Controller;


use Exception;
use Swagger\Client\Api\DefaultApi;
use Swagger\Client\Model\CreateLeadRequest1;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;



class UserController
{
    /**
     * @Route("/user/leads", name="post_lead")
     * @Method({"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createLeadAction(Request $request): JsonResponse
    {
        $requestArray = json_decode($request->getContent(), 1);

//        $leadResponse = $this->get('beauty_stack.service.user.lead')->createLead(
//            new LeadRequest($requestArray['email'])
//        );
//        return new JsonResponse($leadResponse->toArray(), Response::HTTP_CREATED);

        $api_instance = new DefaultApi();
        $create_lead_request = new CreateLeadRequest1(); // \Swagger\Client\Model\CreateLeadRequest1 | Request for creating a lead
        $create_lead_request->setEmail('lalobo@gmail.com');
        try {
            $result = $api_instance->userLeadsPost($create_lead_request);
            print_r($result);
        } catch (Exception $e) {
            echo 'Exception when calling DefaultApi->userLeadsPost: ', $e->getMessage(), PHP_EOL;
        }
    }
}