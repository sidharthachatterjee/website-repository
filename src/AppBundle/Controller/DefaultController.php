<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request) : Response
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/confirm-lead-email", name="confirm_lead_email")
     */
    public function confirmLeadEmailAction(Request $request) : Response
    {
        $apiClient = new \BeautyStack\ApiClient\ApiClient();
        $apiClient->getConfig()->setHost('http://api.beautystack.local');
        $apiInstance = new \BeautyStack\ApiClient\Api\DefaultApi($apiClient);
        $updateLeadRequest = new \BeautyStack\ApiClient\Model\UpdateLeadRequest();
        $updateLeadRequest->setStatus('CONFIRMED');
        $result = $apiInstance->userLeadsIdPatch($request->get('activationToken'), $updateLeadRequest);

        return $this->redirectToRoute('email_confirmed', array(), 301);
    }

    /**
     * @Route("/confirmed", name="email_confirmed")
     */
    public function emailConfirmed() : Response
    {
        return $this->render('default/confirmed.html.twig');
    }
}
