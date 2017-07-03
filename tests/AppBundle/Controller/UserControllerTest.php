<?php

namespace Tests\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class UserControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request(
            'POST',
            '/user/leads',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            '{"email":"jane.doe@example.com"}');

        $content = 'Beautystack is a new salon software system for beauty pros.';
        $this->assertEquals(201, $client->getResponse()->getStatusCode());
        // $this->assertContains($content, $crawler->filter('header p')->text());
    }
}
