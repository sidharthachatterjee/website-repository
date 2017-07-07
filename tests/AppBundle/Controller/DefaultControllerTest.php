<?php

namespace Tests\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $content = 'Beautystack is a new salon software system for beauty pros.';
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertContains($content, $crawler->filter('header p')->text());
    }
}