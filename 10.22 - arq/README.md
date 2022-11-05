
http://dontpad.com/maua22_ecm516


# Rodar projeto
```
docker build -t guisamuka/lembretes:0.0.1 ./lembretes

kubectl apply -f lembretes.yaml
> pod/lembretes created

kubectl get pods/lembretes
> NAME        READY   STATUS    RESTARTS   AGE
> lembretes   1/1     Running   0          57s

kubectl describe pods/lembretes
> ...
> Events:
>  Type    Reason     Age    From               Message
>  ----    ------     ----   ----               -------
>  Normal  Scheduled  3m22s  default-scheduler  Successfully assigned default/lembretes to docker-desktop
>  Normal  Pulled     3m21s  kubelet            Container image "guisamuka/lembretes:0.0.1" already present on machine
>  Normal  Created    3m21s  kubelet            Created container lembretes
>  Normal  Started    3m21s  kubelet            Started container lembretes

kubectl delete -f lembretes.yaml
> pod "lembretes" deleted

kubectl describe pods/lembretes
> Error from server (NotFound): pods "lembretes" not found

kubectl apply -f lembretes-deployment.yaml
> deployment.apps/lembretes-deployment created

kubectl get deployments
> NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
> lembretes-deployment      0/1     1            0           28s
> meu-primeiro-deployment   3/4     2            3           50m



```



