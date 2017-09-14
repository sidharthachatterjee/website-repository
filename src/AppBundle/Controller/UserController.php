<?php
namespace AppBundle\Controller;

use BeautyStack\ApiClient\ApiException;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class UserController extends Controller
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

        $apiClient = new \BeautyStack\ApiClient\ApiClient();
        $apiClient->getConfig()->setHost($this->getParameter('beautystack_api_host'));
        $apiInstance = new \BeautyStack\ApiClient\Api\DirectoryApi($apiClient);
        $createLeadRequest = new \BeautyStack\ApiClient\Model\CreateLeadRequest();
        $createLeadRequest->setEmail($requestArray['email']);
        $createLeadRequest->setType($requestArray['type']);
        try {
            $result = $apiInstance->directoryLeadsPost($createLeadRequest);
            return new JsonResponse($result, Response::HTTP_CREATED);
        } catch (ApiException $e) {
            return new JsonResponse(['error' => $e->getMessage()], $e->getCode());
        }
    }
}
