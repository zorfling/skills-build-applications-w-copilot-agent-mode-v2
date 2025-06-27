#!/usr/bin/env python3
"""
Simple script to test the OctoFit API endpoints
"""
import requests
import json

def test_endpoint(url, name):
    try:
        print(f"\n🧪 Testing {name}: {url}")
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")

        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success! Got {len(data)} items")
            if data:
                print(f"Sample data: {json.dumps(data[0], indent=2)}")
        else:
            print(f"❌ Failed with status {response.status_code}")
            print(f"Response: {response.text}")

    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")

def main():
    base_urls = [
        "http://localhost:8000/api",
        "https://laughing-zebra-5gpqq4w74fvj5g-8000.app.github.dev/api"
    ]

    endpoints = [
        ("activities/", "Activities"),
        ("teams/", "Teams"),
        ("users/", "Users"),
        ("workouts/", "Workouts"),
        ("leaderboard/", "Leaderboard")
    ]

    for base_url in base_urls:
        print(f"\n🌐 Testing base URL: {base_url}")
        print("=" * 50)

        for endpoint, name in endpoints:
            test_endpoint(f"{base_url}/{endpoint}", name)

if __name__ == "__main__":
    main()
