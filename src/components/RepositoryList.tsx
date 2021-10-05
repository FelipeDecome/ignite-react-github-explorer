import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
    id: string;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repos, setRepos] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(res => res.json())
            .then(data => setRepos(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repos.map(({id, ...repo}) => <RepositoryItem key={id} repository={repo} />)}
            </ul>
        </section>
    )
}