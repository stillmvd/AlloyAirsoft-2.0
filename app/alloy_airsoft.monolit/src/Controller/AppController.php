<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class AppController extends AbstractController
{
    #[Route('/', name: 'mainPage', methods: ['GET'])]
    public function initialize(): Response
    {
        return $this->render('base.html.twig');
    }
    #[Route('/events', name: 'eventsPage', methods: ['GET'])]
    public function events(): Response
    {
        return $this->render('base.html.twig');
    }
    #[Route('/gallery', name: 'galleryPage', methods: ['GET'])]
    public function gallery(): Response
    {
        return $this->render('base.html.twig');
    }
}