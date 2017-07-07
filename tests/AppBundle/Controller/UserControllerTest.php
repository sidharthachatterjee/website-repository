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
            '{"email":"jane.doe@example.com"}'
        );

        $this->assertEquals(201, $client->getResponse()->getStatusCode());
    }
}
