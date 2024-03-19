<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class AppController extends AbstractController
{
    #[Route('/api', name: 'mainPage', methods: ['GET'])]
    public function initialize(): Response
    {
        return $this->render('base.html.twig');
    }
}