<?php
namespace AppBundle\Controller;

use Exception;
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

        $apiInstance = new \BeautyStack\ApiClient\Api\DefaultApi();
        $createLeadRequest = new \BeautyStack\ApiClient\Model\CreateLeadRequest();
        $createLeadRequest->setEmail($requestArray['email']);
        $result = $apiInstance->userLeadsPost($createLeadRequest);
        return new JsonResponse($result, Response::HTTP_CREATED);
    }
}
