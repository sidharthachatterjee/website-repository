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
    public function indexAction(Request $request): Response
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')) . DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/confirm-lead-email/{slug}", name="confirm_lead_email")
     */
    public function confirmLeadEmailAction(Request $request, string $slug): Response
    {
        $apiClient = new \BeautyStack\ApiClient\ApiClient();
        $apiClient->getConfig()->setHost($this->get('beautystack_api_host'));
        $apiInstance       = new \BeautyStack\ApiClient\Api\DirectoryApi($apiClient);
        $updateLeadRequest = new \BeautyStack\ApiClient\Model\UpdateLeadRequest();
        $updateLeadRequest->setStatus('CONFIRMED');
        $result = $apiInstance->directoryLeadsIdPatch($slug, $updateLeadRequest);

        return $this->redirectToRoute('email_confirmed', [], 301);
    }

    /**
     * @Route("/confirmed", name="email_confirmed")
     */
    public function emailConfirmed(): Response
    {
        return $this->render('default/confirmed.html.twig');
    }

    /**
     * @Route("/privacy", name="rights")
     */
    public function privacyAction(Request $request): Response
    {
        return $this->render('default/privacy.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')) . DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/termsofservice", name="terms")
     */
    public function termsAction(Request $request): Response
    {
        return $this->render('default/terms.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')) . DIRECTORY_SEPARATOR,
        ]);
    }
}
